import React from "react";

import { Link } from "react-router-dom";

import { pageData } from "../data/pageData"; // 새로운 데이터 파일에서 내용을 가져옵니다.123



const MicropaymentService: React.FC = () => {

  const data = pageData.micropayment;



  if (!data) {

    return <div>페이지를 찾을 수 없습니다.</div>;

  }



  return (

    <div className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20">

        <div className="container mx-auto px-4 text-center">

          <div className="inline-flex items-center bg-white rounded-full p-4 mb-6 shadow-md">

            <span className="text-5xl">{data.image}</span>

          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">

            {data.title}

          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">

            {data.description}

          </p>

        </div>

      </section>



      <section className="py-12 md:py-16">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto">

            <div className="space-y-12">

              {data.sections.map((section, index) => (

                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-500 pl-4">

                    {section.title}

                  </h2>

                  <div

                    className="prose prose-lg max-w-none"

                    dangerouslySetInnerHTML={{ __html: section.content }}

                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      <section className="py-12">

        <div className="container mx-auto px-4 text-center">

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">

              지금 바로 상담해보세요!

            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">

              공룡페이의 전문 상담원이 24시간 대기하며, 고객님의 상황에 맞는 최적의 소액결제 현금화 방법을 안내해 드립니다.

            </p>

            <a

              href="https://grpay.channel.io/home"

              target="_blank"

              rel="noopener noreferrer"

              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg"

            >

              💬 1:1 실시간 상담하기

            </a>

        </div>

      </section>

    </div>

  );

};



export default MicropaymentService;
