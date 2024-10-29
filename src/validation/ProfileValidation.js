import * as yup from "yup";



export const ResidancyInfoSchema = yup.object({
    ImmigrationStatus: yup.string().required("ImmigrationStatus is required"),
    birthCounty: yup.string().required("birthCounty is required"),
    residencyCounty: yup.string().required("residencyCounty is required"),
    grownUpCountry: yup.string().required("grownUpCountry is required")
})

export const BasicDetailsSchema = yup.object({
    DOB: yup.string().required("DOB is required"),
    firstName: yup.string().required("firstName is required"),
    gender: yup.string().required("gender is required"),
    lastName: yup.string().required("lastName is required")
})

export const CareerInfoSchema = yup.object({
    designation: yup.string().required("designationis required"),
    company: yup.string().required("company is required"),
    start: yup.string().required("company is required"),
    end: yup.string().required("end is required")
})

export const PhysicalattributeDetailsSchema = yup.object({
    weight: yup.string().required("weight required"),
    skinComplexion: yup.string().required("skinComplexion is required"),
    Height: yup.string().required("Height is required"),
    Disablity: yup.string().required("Disablity is required"),
    BloodGroup: yup.string().required("BloodGroup is required"),
})

export const EducationSchema = yup.object({
    Degree: yup.string().required("Degree required"),
    end: yup.string().required("end is required"),
    insitution: yup.string().required("insitution is required"),
    start: yup.string().required("start is required")
})