"use server";

export async function HiringFormData(formData) {
    formData.append("_wpcf7_unit_tag", "875fde8");

    try {
        const response = await fetch(
            "https://api.prismolix.com/wp-json/contact-form-7/v1/contact-forms/52/feedback",
            { method: "POST", body: formData }
        );

        const text = await response.text();

        // Extract JSON from response that may contain PHP warnings
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No valid JSON in response");

        const data = JSON.parse(jsonMatch[0]);
        return data;

    } catch (error) {
        console.error("Failed to submit form:", error);
        return {
            message: error.message || "An unexpected error occurred, please try again.",
            status: "error",
        };
    }
}