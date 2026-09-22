import React, {
  useState,
  useEffect,
} from "react";

import { useApi } from "../../hooks/useApi";

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
  const { get, put } = useApi();

  const [step, setStep] = useState(1);

  const [initializing, setInitializing] =
    useState(true);

  const [saveError, setSaveError] =
    useState("");

  const [isSaving, setIsSaving] =
    useState(false);

  const [formData, setFormData] =
    useState({
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

      write_a_few_words_about_your_journey:
        "",

      best_ways_to_connect: [],
    });

  useEffect(() => {
    async function loadProfile() {
      try {
        const result =
          await get(
            "/member-profiles/me"
          );

        if (result?.profile) {
          setFormData(
            result.profile
          );

          setStep(10);
        }
      } catch (err) {
        console.log(
          "No existing profile found"
        );
      } finally {
        setInitializing(false);
      }
    }

    loadProfile();
  }, []);

  async function handleComplete() {
    if (isSaving) {
      return;
    }

    setIsSaving(true);
    setSaveError("");
    setStep(8);

    try {
      await put(
        "/member-profiles/me",
        {
          ...formData,
          onboarding_complete:
            true,
        }
      );

      setTimeout(() => {
        setStep(9);
        setIsSaving(false);
      }, 2000);
    } catch (error) {
      console.error(error);

      setSaveError(
        error.message ||
          "Unable to save profile."
      );

      setIsSaving(false);
      setStep(7);
    }
  }

  if (initializing) {
    return <LoadingStep />;
  }

  if (step === 1) {
    return (
      <WelcomeStep
        onNext={() =>
          setStep(2)
        }
      />
    );
  }

  if (step === 2) {
    return (
      <IdentityStep
        formData={formData}
        setFormData={
          setFormData
        }
        onNext={() =>
          setStep(3)
        }
      />
    );
  }

  if (step === 3) {
    return (
      <PersonalityStep
        formData={formData}
        setFormData={
          setFormData
        }
        onBack={() =>
          setStep(2)
        }
        onNext={() =>
          setStep(4)
        }
      />
    );
  }

  if (step === 4) {
    return (
      <RelationshipStep
        formData={formData}
        setFormData={
          setFormData
        }
        onBack={() =>
          setStep(3)
        }
        onNext={() =>
          setStep(5)
        }
      />
    );
  }

  if (step === 5) {
    return (
      <CommunityRoleStep
        formData={formData}
        setFormData={
          setFormData
        }
        onBack={() =>
          setStep(4)
        }
        onNext={() =>
          setStep(6)
        }
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
    <div>
      {saveError && (
        <div
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            padding: "14px",
            border: "1px solid #d9534f",
            borderRadius: "10px",
            backgroundColor: "#fff5f5",
            color: "#b52b27",
          }}
        >
          {saveError}
        </div>
      )}

      <CompleteStep
        formData={formData}
        onBack={() => setStep(6)}
        onComplete={handleComplete}
      />
    </div>
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