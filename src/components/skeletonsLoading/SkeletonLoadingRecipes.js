import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const SkeletonLoadingRecipes = () => {
  return (
    <>
      <div>
        <ContentLoader
          speed={2}
          width={500}
          height={300}
          viewBox="0 0 500 300"
          backgroundColor="#f3f3f3"
          foregroundColor="#9e9e9e"
        >
          <rect x="120" y="-4" rx="3" ry="3" width="270" height="32" />
          <rect x="120" y="36" rx="3" ry="3" width="270" height="157" />
          <rect x="120" y="198" rx="3" ry="3" width="270" height="19" />
          <rect x="120" y="220" rx="3" ry="3" width="270" height="57" />
          <rect x="120" y="281" rx="3" ry="3" width="270" height="14" />
        </ContentLoader>
      </div>
    </>
  );
};

export default SkeletonLoadingRecipes;
