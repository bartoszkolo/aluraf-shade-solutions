
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-aluraf-red mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">
            Przepraszamy, nie możemy znaleźć tej strony
          </p>
          <p className="text-gray-600 mb-8">
            Strona, której szukasz, mogła zostać usunięta, zmieniła nazwę lub jest tymczasowo niedostępna.
          </p>
          <Link
            to="/"
            className="cta-button inline-block"
          >
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
