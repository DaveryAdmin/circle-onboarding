import React, { useState } from "react";
 
import WelcomeStep from "./steps/WelcomeStep";
import IdentityStep from "./steps/IdentityStep";
import PersonalityStep from "./steps/PersonalityStep";
import RelationshipStep from "./steps/RelationshipStep";
import CommunityRoleStep from "./steps/CommunityRoleStep";
import ReflectionStep from "./steps/ReflectionStep";
import CompleteStep from "./steps/CompleteStep";
import LoadingStep from "./steps/LoadingStep";
import SuccessStep from "./steps/SuccessStep";
 
import ProfilePage from "../Profile/ProfilePage";
 
export default function OnboardingFlow() {
const [step, setStep] = useState(1);
 
const [formData, setFormData] = useState({
full_name: "",
email: "",
timezone: "",
username: "",
age: "",
location1: "",
website: "",
 
what_describes_you_best: [],
interests_and_passions: [],
 
what_i_am_looking_for: "",
relationship_status: "",
relationship_status_other: "",
 
how_do_you_see_yourself_here: [],
 
write_a_few_words_about_your_journey: "",
best_ways_to_connect: [],
});
 
if (step === 1) {
return (
<WelcomeStep
onNext={() => setStep(2)}
/>
);
}
 
if (step === 2) {
return (
<IdentityStep
formData={formData}
setFormData={setFormData}
onNext={() => setStep(3)}
/>
);
}
 
if (step === 3) {
return (
<PersonalityStep
formData={formData}
setFormData={setFormData}
onBack={() => setStep(2)}
onNext={() => setStep(4)}
/>
);
}
 
if (step === 4) {
return (
<RelationshipStep
formData={formData}
setFormData={setFormData}
onBack={() => setStep(3)}
onNext={() => setStep(5)}
/>
);
}
 
if (step === 5) {
return (
<CommunityRoleStep
formData={formData}
setFormData={setFormData}
onBack={() => setStep(4)}
onNext={() => setStep(6)}
/>
);
}
 
if (step === 6) {
return (
<ReflectionStep
formData={formData}
setFormData={setFormData}
onBack={() => setStep(5)}
onNext={() => setStep(7)}
/>
);
}
 
if (step === 7) {
return (
<CompleteStep
formData={formData}
onBack={() => setStep(6)}
onComplete={() => {
setStep(8);
 
setTimeout(() => {
setStep(9);
}, 2000);
}}
/>
);
}
 
if (step === 8) {
return <LoadingStep />;
}
 
if (step === 9) {
return (
<SuccessStep
onViewProfile={() => setStep(10)}
/>
);
}
 
if (step === 10) {
return (
<ProfilePage
profile={formData}
/>
);
}
 
return null;
}