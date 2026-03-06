"use server";

export async function HiringFormData(formData) {
    formData.append("_wpcf7_unit_tag", "875fde8");
    try {
        const response = await fetch(
            "https://api.prismolix.com/wp-json/contact-form-7/v1/contact-forms/52/feedback",
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Failed to submit form:", error);

        return {
            message: error.message || "An unexpected error has occurred, please try again.",
            status: "error",
        };
    }
}