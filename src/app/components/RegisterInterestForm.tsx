"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@convex/_generated/api";

export default function RegisterInterestForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    parentMobileNumber: "",
    studentName: "",
    studentAge: "",
    studentRating: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createLead = useMutation(api.leads.createLead);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call the Convex mutation with form data
      await createLead({
        parentName: formData.parentName,
        parentEmail: formData.parentEmail,
        parentMobileNumber: formData.parentMobileNumber,
        studentName: formData.studentName,
        studentAge: parseInt(formData.studentAge),
        studentRating: formData.studentRating
          ? parseInt(formData.studentRating)
          : undefined,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="register-interest" className="py-24 px-6 bg-pure-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-title text-center text-gradient mb-8">
          Register Interest
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Fill in the details below and we'll get back to you shortly.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {isSubmitted ? (
          <div className="glass-effect rounded-xl p-12 text-center text-green-600">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p>Your interest has been registered. We will contact you soon.</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  parentName: "",
                  parentEmail: "",
                  parentMobileNumber: "",
                  studentName: "",
                  studentAge: "",
                  studentRating: "",
                });
              }}
              className="mt-6 text-sm text-gray-500 hover:text-black underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-effect rounded-xl p-8 md:p-12 space-y-6"
          >
            {/* Parent Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Parent Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent Whatsapp Number
                  </label>
                  <input
                    type="tel"
                    name="parentMobileNumber"
                    required
                    value={formData.parentMobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                    placeholder="+65 9123 4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent Email
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  required
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Student Details */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Student Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Age
                  </label>
                  <input
                    type="number"
                    name="studentAge"
                    required
                    min="3"
                    max="100"
                    value={formData.studentAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                    placeholder="7"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Current Chess Rating (If Applicable)
                </label>
                <input
                  type="number"
                  name="studentRating"
                  value={formData.studentRating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-hidden transition-all bg-white/50"
                  placeholder="e.g. 1200 (Leave blank if beginner)"
                />
              </div>
            </div>

            <div className="pt-6 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
