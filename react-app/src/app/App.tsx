import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { HomePage } from '../pages/HomePage';
import { SimulationPage } from '../pages/SimulationPage';

function PlaceholderPage({ title, body }: { title: string; body: string }) {
  return (
    <section className="r-section">
      <div className="r-container">
        <div className="r-placeholder">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route
          path="/service"
          element={<PlaceholderPage title="サービス一覧" body="サービス詳細ページは順次React移行中です。" />}
        />
        <Route
          path="/service/*"
          element={<PlaceholderPage title="サービス詳細" body="サービス詳細ページは順次React移行中です。" />}
        />
        <Route
          path="/works"
          element={<PlaceholderPage title="施工事例" body="施工事例ページは順次React移行中です。" />}
        />
        <Route
          path="/works/*"
          element={<PlaceholderPage title="施工事例詳細" body="施工事例詳細ページは順次React移行中です。" />}
        />
        <Route
          path="/column"
          element={<PlaceholderPage title="コラム" body="コラムページは順次React移行中です。" />}
        />
        <Route
          path="/column/*"
          element={<PlaceholderPage title="コラム詳細" body="コラム詳細ページは順次React移行中です。" />}
        />
        <Route
          path="/company"
          element={<PlaceholderPage title="会社情報" body="会社情報ページは順次React移行中です。" />}
        />
        <Route
          path="/company/*"
          element={<PlaceholderPage title="会社情報" body="会社情報ページは順次React移行中です。" />}
        />
        <Route
          path="/contact"
          element={<PlaceholderPage title="お問い合わせ" body="お問い合わせフォームは順次React移行中です。" />}
        />
        <Route
          path="/recruit"
          element={<PlaceholderPage title="採用情報" body="採用情報ページは順次React移行中です。" />}
        />
        <Route
          path="/privacy"
          element={<PlaceholderPage title="プライバシーポリシー" body="プライバシーポリシーページは順次React移行中です。" />}
        />
        <Route
          path="/dive-survey"
          element={<PlaceholderPage title="水中点検" body="水中点検ページは順次React移行中です。" />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
