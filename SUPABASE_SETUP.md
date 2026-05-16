# Supabase setup

1. Create a free project at https://supabase.com.
2. Open SQL Editor, paste everything from `supabase.sql`, and run it.
3. Go to Authentication > Sign In / Providers > Email and turn off email confirmations.
4. Go to Project Settings > API.
5. For local testing, copy `supabase-config.example.js` to `supabase-config.js`.
6. Copy the Project URL into your local `supabase-config.js`.
7. Copy the public anon/publishable key into your local `supabase-config.js`.
8. In GitHub, add repository secrets named `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
9. In GitHub Pages settings, choose GitHub Actions as the source.

Do not use the `service_role` key in this project. The public anon/publishable key is the correct one for a browser app because the database is protected by Row Level Security.
