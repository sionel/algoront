import { connectToDatabase } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  
}
