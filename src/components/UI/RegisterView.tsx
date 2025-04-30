"use client";

import { register } from "@/utils/auth.helper";
import { validatationSchemaRegister } from "@/utils/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

const RegisterView = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Registrate en Apple Store
        </h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            address: "",
            phone: "",
          }}
          validationSchema={validatationSchemaRegister}
          onSubmit={async (values) => {
            await register(values);
            router.push("/login");
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
                  Password
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

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Nombre
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Juan Gomez"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-700 mb-1">
                  Dirección
                </label>
                <Field
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Córdoba, Córdoba"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Celular
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="155919191"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !!(errors.email || errors.password)}
                className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Registrarse"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterView;
