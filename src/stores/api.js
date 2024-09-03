import { defineStore } from "pinia";
export const useApiStore = defineStore("api", () => {
  const apiStatusCode = ref(200);
  const apiStatus = computed(() => {
    if (apiStatusCode.value && apiStatusCode.value !== 200) {
      return true;
    } else return false;
  });
  const apiStatusText = computed(() => {
    switch (apiStatusCode.value) {
      case 401:
        sessionStorage.removeItem("webToken");
        return "憑證失效";
        break;
      case 404:
        return "憑證失效";
        break;
      case 500:
        return "伺服器維修中";
        break;
      default:
        break;
    }
  });
  const errorRecord = ref("");
  return {
    apiStatusCode,
    apiStatus,
    apiStatusText,
    errorRecord,
  };
});
