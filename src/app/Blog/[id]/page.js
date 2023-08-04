import Singleblog from "@/component/Singleblog";
const URL=process.env.API
console.log("first",URL)
async function getData(id) {
  console.log("id",id)
  const data = await fetch(
    `${URL}/api/post/${id}`,
    { cache: "no-store" } 
  );
  if (!data) {
    console.log("error");
  }
  return data.json();
} 
export async function generateMetadata({params}){
  const post=await getData(params.id)
  return{
    title:post.title
  }
}
const singleBlog = async ({params}) => {
  const data = await  getData(params.id);
  return <Singleblog data={data}/>
};

export default singleBlog;
