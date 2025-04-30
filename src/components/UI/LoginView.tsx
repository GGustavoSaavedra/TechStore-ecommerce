"use client";

import Link from "next/link";
import { validateLoginForm } from "@/utils/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "@/utils/auth.helper";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const LoginView = () => {
  const { setUserData } = useAuth();
  const router = useRouter();
  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to Apple Store
        </h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={validateLoginForm}
          onSubmit={async (values) => {
            const response = await login(values);
            const { token, user } = response;
            setUserData({ token, user });
            router.push("/");
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Contraseña
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !!(errors.email || errors.password)}
                className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Iniciar Sesión"}
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-gray-600 text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
