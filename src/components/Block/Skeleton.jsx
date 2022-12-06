import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="120" r="120" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="15" />
    <rect x="0" y="300" rx="10" ry="10" width="280" height="80" />
    <rect x="0" y="400" rx="10" ry="10" width="95" height="25" />
    <rect x="140" y="390" rx="20" ry="20" width="140" height="40" />
  </ContentLoader>
);

export default Skeleton;
