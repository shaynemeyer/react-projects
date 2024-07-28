import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: "1rem " }}>Loading...</p>;
  }

  if (error) {
    return (
      <p style={{ marginTop: "1rem " }}>An error occurred: {error.message}</p>
    );
  }

  if (!data?.taskList?.length) {
    return <p style={{ marginTop: "1rem " }}>No tasks found.</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
