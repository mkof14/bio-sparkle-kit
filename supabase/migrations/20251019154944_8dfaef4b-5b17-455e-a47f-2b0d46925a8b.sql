-- Remove redundant RLS policy that explicitly denies anonymous access
-- The default-deny approach of RLS makes this policy unnecessary
DROP POLICY IF EXISTS "Deny anonymous access to profiles" ON public.profiles;