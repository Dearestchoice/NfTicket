function PageNotFound() {
  return (
    <div className="flex-1 flex flex-col py-8 items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src="/images/connect.webp"
          alt=""
          className="h-40 w-full object-cover object-center"
        />
      </div>
      <h3 className="mb-6">Page not found</h3>
      <a href="/" style={{ textDecoration: "underline" }}>
        Go to home page
      </a>
    </div>
  );
}

export default PageNotFound;
