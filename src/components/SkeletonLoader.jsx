const SkeletonLoader = () => {
  return (
    <li className="skeleton-container">
      <div className="skeleton">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-content">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      </div>
    </li>
  );
};

export { SkeletonLoader };
