export const ListProduct = () => {
  return (
    <div
      id="tabs-1-panel-1"
      className="space-y-10 px-4 pt-10 pb-8"
      aria-labelledby="tabs-1-tab-1"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="flex">
        <div className="w-1/4 group px-5 relative text-sm">
          <div className=" aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img
              src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
              alt="Models sitting back to back, wearing Basic Tee in black and bone."
              className="object-cover object-center"
            />
          </div>
          <a href="#" className="mt-6 block font-medium text-gray-900">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            New Arrivals
          </a>
          <p aria-hidden="true" className="mt-1">
            Shop now
          </p>
        </div>
        <div className="w-1/4 px-5 group relative text-sm">
          <div className=" aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
            <img
              src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
              alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
              className="object-cover object-center"
            />
          </div>
          <a href="#" className="mt-6 block font-medium text-gray-900">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            Basic Tees
          </a>
          <p aria-hidden="true" className="mt-1">
            Shop now
          </p>
        </div>
      </div>
    </div>
  );
};
