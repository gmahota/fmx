<template>
  <div>
    <hero />
    <theme-features />
    <features />
    <contact-us />
    <affiliates />

    <Features-Cursos/>
    <newsletter />
    <!-- <social-media />, -->
    <keep-in-touch />
    
    <!-- <pro-features /> -->
    <info />,
  </div>
</template>

<script>
export default {
  layout: "home",
  components: {
    Hero: () => import("@/components/sections/Hero"),
    ThemeFeatures: () => import("@/components/sections/ThemeFeatures"),
    ContactUs: () => import("@/components/sections/ContactUs"),
    Affiliates: () => import("@/components/sections/Affiliates"),
    FeaturesCursos: () => import("@/components/sections/FeaturesCursos"),

    SocialMedia: () => import("@/components/sections/SocialMedia"),
    
    KeepInTouch: () => import("@/components/sections/KeepInTouch"),
    Newsletter: () => import("@/components/sections/Newsletter"),
    ProFeatures: () => import("@/components/sections/ProFeatures"),
    Info: () => import("@/components/sections/Info")
  }
};
</script>