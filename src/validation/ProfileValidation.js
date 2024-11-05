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


export const LanguageInfoSchema = yup.object({
    motherTounge: yup.string().required("motherTounge is required"),
    knownLanguage: yup.string().required("knownLanguage is required")
})


export const HobbiesAndInterestSchema = yup.object({
    Hobbies: yup.string().required("Hobbies is required"),
    Intrest: yup.string().required("Interest is required"),
    Music: yup.string().required("Music is required"),
    Books: yup.string().required("Books is required"),
    Movies: yup.string().required("Movies is required"),
    tvShow: yup.string().required("tvShow is required"),
    Sports: yup.string().required("Sports is required"),
    fitnessActivities: yup.string().required("fitnessActivities is required"),
    cuisines: yup.string().required("cuisines is required"),
    dressStyle: yup.string().required("dressStyle is required"),

})


export const PersonalAttitudeSchema = yup.object({
    Affection: yup.string().required("Affection is required"),
    religionService: yup.string().required("religionService is required")
})


export const BackgroundInfoSchema = yup.object({
    Religion: yup.string().required("Religion is required"),
    Caste: yup.string().required("caste is required"),
    SubCast: yup.string().required("SubCaste is required"),
    SelfWorth: yup.number().required("SelfWorth is required"),
    FamilyWorth: yup.number().required("FamilyWorth is required")
})


export const AstronomicInfoSchema = yup.object({
    SunSign: yup.string().required("SunSign is required"),
    MoonSign: yup.string().required("MoonSign is required"),
    TimeOfBirth: yup.string().required("Time Of Birth is required "),
    CityOfBirth: yup.string().required("City Of Birth required")
})


export const PresentAddressSchema = yup.object({
    Country: yup.string().required("Country is required"),
    State: yup.string().required("State is required"),
    City: yup.string().required("City is required"),
    Pincode: yup.string().required("Pin code is required")
})


export const PermanentAddressSchema = yup.object({
    Country: yup.string().required("Country is required"),
    State: yup.string().required("State is required"),
    City: yup.string().required("City is required"),
    Pincode: yup.string().required("Pin code is required")
})


export const PartnerExpectionSchema = yup.object({
    GernalRequirement: yup.string().required(" field is required"),
    ResidenceCountry: yup.string().required(" field is required"),
    Height: yup.string().required(" field is required"),
    weight: yup.string().required(" field is required"),
    MaritalStatus: yup.string().required(" field is required"),
    Children: yup.string().required(" field is required"),
    Religion: yup.string().required(" field is required"),
    Caste: yup.string().required(" field is required"),
    SubCaste: yup.string().required(" field is required"),
    Language: yup.string().required(" field is required"),
    Education: yup.string().required(" field is required"),
    Profession: yup.string().required(" field is required"),
    SmokingAcceptable: yup.string().required(" field is required"),
    DrinkAcceptable: yup.string().required(" field is required"),
    DietAcceptable: yup.string().required(" field is required"),
    personalValue: yup.string().required(" field is required"),
    FamilyValue: yup.string().required(" field is required"),
    Manglik: yup.string().required(" field is required"),
    PreferredCountry: yup.string().required(" field is required"),
    PreferredState: yup.string().required(" field is required"),
    Complexion: yup.string().required(" field is required"),
})

