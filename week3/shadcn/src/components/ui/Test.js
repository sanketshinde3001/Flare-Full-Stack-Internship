import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, RocketIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Test = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1>Following Data From Test</h1>
      {/* buttons */}
      <Button variant="outline">Button 1</Button>
      <Button variant="destructive">Button 2</Button>
      <Button variant="default">Button 3</Button>
      <Button variant="link">Link</Button>
      <Button disabled>disabled Button</Button>
      {/* icons */}
      <Button>
        <TrashIcon className="h-4 w-4 mr-2" /> Delete
      </Button>
      <Button disabled>
        <DownloadIcon className="h-4 w-4 mr-2 animate-bounce" /> Uploading
      </Button>
      {/* Link */}
      <Button asChild variant="ghost">
        <Link href="/login">Log In</Link>
      </Button>

      {/* Alert */}

      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Test;
