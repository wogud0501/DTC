import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Discord 서버 소개</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/server-introduction">
            <a className="bg-blue-500 text-white rounded-lg p-4 shadow-lg hover:bg-blue-600 transition">
              서버 소개
            </a>
          </Link>
          <Link href="/server-link">
            <a className="bg-green-500 text-white rounded-lg p-4 shadow-lg hover:bg-green-600 transition">
              서버 링크
            </a>
          </Link>
          <Link href="/server-review">
            <a className="bg-yellow-500 text-white rounded-lg p-4 shadow-lg hover:bg-yellow-600 transition">
              서버 리뷰
            </a>
          </Link>
          <Link href="/server-activities">
            <a className="bg-red-500 text-white rounded-lg p-4 shadow-lg hover:bg-red-600 transition">
              서버 활동
            </a>
          </Link>
        </div>
      </div>
  );
}
