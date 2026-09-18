export type ProjectCategory = "UI/UX" | "Frontend";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  link: string;
  image?: string;
}

export const projectsDataJa: Project[] = [
  // UI/UX
  {
    id: "freshfusion",
    title: "FreshFusion",
    description: "忙しい家族やプロフェッショナル層にアピールする強力なブランド力で、競合他社と差別化を図るオンライン食料品・ミールキット配達サービス。",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167855361/FreshFusion-Online-grocery-shopping-app",
    image: "https://satokogruson.github.io/img/FreshFusion.png"
  },
  {
    id: "studybuddy",
    title: "StudyBuddy",
    description: "課題やタスクを管理し、仲間と協力して学習を進めたい高校生・大学生向けの学習計画アプリ。",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167855179/StuddyBuddy-Connect-with-your-studdybuddies/",
    image: "https://satokogruson.github.io/img/StuddyBuddy.png"
  },
  {
    id: "findmydoc",
    title: "findMyDoc",
    description: "医師の予約検索と処方薬の管理をワンストップで解決。もう面倒な手続きに悩まされることはありません。",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167856825/findMyDoc-One-stop-shop-for-doctor-appointments",
    image: "https://satokogruson.github.io/img/findMyDoc.png"
  },
  {
    id: "traveco",
    title: "Traveco",
    description: "シンプルでマップ中心のナビゲーションを求める、環境意識の高い旅行者向けの位置情報活用トラベルアプリ。",
    category: "UI/UX",
    link: "https://www.behance.net/gallery/167863591/Traveco-The-travel-app-for-the-eco-conscious/",
    image: "https://satokogruson.github.io/img/Traveco.png"
  },

  // FRONTEND
  {
    id: "savor-the-globe",
    title: "Savor the Globe",
    description: "地元で愛される味から世界的な名物まで、世界の食文化を象徴するトップ5の料理を発見できるAIジェネレーター。",
    category: "Frontend",
    link: "https://top-5-best-food-ai-generator.replit.app",
    image: "/images/savor-the-globe.png"
  },
  {
    id: "world-clock",
    title: "World Clock App",
    description: "世界中のタイムゾーンを効率的に確認できるダイナミックなツール。生産性とグローバルコミュニケーションの向上を目的に設計されています。",
    category: "Frontend",
    link: "https://world-clock-responsive.replit.app/",
    image: "/images/world-clock.png"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "リアルタイムの天気予報を取得。高度なインタラクティビティとカスタマイズ性を備えた天気アプリケーション。",
    category: "Frontend",
    link: "https://Weather-app-gruson.replit.app",
    image: "https://satokogruson.github.io/img/weather-app.png"
  },
  {
    id: "sweet-macarons",
    title: "Sweet Macarons",
    description: "甘くて美味しいマカロンのミニウェブサイト。SheCodesで初めて作成したコーディングプロジェクトです。",
    category: "Frontend",
    link: "https://gruson-sweet-macarons.netlify.app/",
    image: "https://satokogruson.github.io/img/sweet-macarons.png"
  },
];
