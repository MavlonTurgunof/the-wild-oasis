import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qyizknsiiptlmotvwuqv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aXprbnNpaXB0bG1vdHZ3dXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMzU2MjMsImV4cCI6MjAzMzYxMTYyM30.iycTg10rvfs4DXpoOYoFTb7PFtTLnVBBERaokTd6tZo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
