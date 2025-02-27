export default function ServerIntroduction() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">서버 소개</h1>
            <p className="mb-4">
                여기에 Discord 서버에 대한 소개 내용을 작성하세요.
            </p>
            <a
                href="YOUR_DISCORD_INVITE_LINK"
                className="bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-600 transition"
            >
                Discord 초대 링크
            </a>
        </div>
    );
}
