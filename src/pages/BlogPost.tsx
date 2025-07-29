import type React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import contentfulClient from "../services/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { INLINES } from "@contentful/rich-text-types";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await contentfulClient.getEntries({
          content_type: "blogPost",
          "fields.id": parseInt(id, 10),
          limit: 1,
        });
        if (response.items.length > 0) {
          setPost(response.items[0]);
        }
      } catch (error) {
        console.error("Error fetching Contentful entry:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // 리치 텍스트 렌더링 옵션 (번역기 설정)
  const renderOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        const { sys, fields } = node.data.target;
        // 포함된 콘텐츠가 'Internal Link' 모델일 경우
        if (sys.contentType.sys.id === "internalLink") {
          return (
            <Link to={fields.linkUrl} className="text-green-600 hover:underline font-semibold">
              {fields.linkText}
            </Link>
          );
        }
        return null;
      },
    },
  };

  if (loading) {
    return <div className="text-center py-20">로딩 중...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            포스트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-8">
            요청하신 블로그 포스트가 존재하지 않습니다.
          </p>
          <Link
            to="/blog"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            블로그 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
            >
              {/* ... SVG 아이콘 ... */}
              블로그 목록으로 돌아가기
            </Link>
          </nav>
          <div className="max-w-4xl mx-auto text-center">
            {/* ... 포스트 헤더 정보 ... */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.fields.title}
            </h1>
            {/* ... 태그 정보 ... */}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {documentToReactComponents(post.fields.content as Document, renderOptions)}
              </div>
              {/* ... CTA 섹션 ... */}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
