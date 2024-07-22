import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhotosTab } from "./photos-tab";
import { VideosTab } from "./videos-tab";

export const Display: FC = ({}) => {
  return (
    <div
      className="flex flex-col gap-y-4 cursor-default py-6 px-4 text-center justify-center items-center"
      id="album"
    >
      <h1 className="font-bold text-3xl">Our Album</h1>
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="flex items-center gap-x-12 bg-transparent">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <PhotosTab />
        </TabsContent>
        <TabsContent value="videos">
          <VideosTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};
