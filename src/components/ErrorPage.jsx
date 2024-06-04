import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div id="error-page" className="flex flex-col gap-3">
        <h1 className="text-center text-2xl font-bold text-gray-700">Oops!</h1>
        <p className="text-base text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
