/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState,useEffect } from "react";
import Navbar from "../../module/common/Navbar";
import type { Course } from "../../module/models/courses";
import { API_URL } from "../../config/dot-env.config";
import CourseCard from "../../components/CourseCard";

const HomePage = () => {
    const [courses,setCourses] = useState<Course[]>([])
    const [loading ,setLoading] = useState(true);
    const [error,setError] = useState("")

    useEffect(() =>{
       const fetchCourses = async () =>{
        try{
           const res = await fetch(`${API_URL}/courses`)
           if(!res.ok){
            throw new Error("Failed to fetch courses")
           } 
           const data = await res.json();
           setCourses(data)
        } catch(err:any){
            setError(err.message || "Something went wrong")
        } finally{
            setLoading(false)
        }
       } 
       fetchCourses(); 
    },[])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
         <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-6">
        <h1 className="text-2xl font-bold mb-4">Popular Courses</h1>

        {loading && <p className="text-gray-500">Loading courses...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
