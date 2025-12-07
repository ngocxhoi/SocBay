export default function () {
  const filters = useState("filter", () => {
    return {
      platform: [],
      price: [0, 1000000],
      miniumFlower: "all",
      niches: [],
      status: [],
    };
  });

  const clearFilter = () => {
    filters.value = {
      platform: [],
      price: [0, 1000000],
      miniumFlower: "all",
      niches: [],
      status: [],
    };
  };

  return {
    filters,
    clearFilter,
  };
}
