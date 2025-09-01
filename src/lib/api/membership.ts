import {
    IndividualMembershipRequestBody,
    OrganizationMembershipRequestBody,
  } from "@/types/types";
  
  const API_BASE = "https://gifon.onrender.com/api/v1";
  
  export async function registerIndividualMembership(payload: IndividualMembershipRequestBody) {
    const res = await fetch(`${API_BASE}/individual-membership/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      // bubble up backend message if available
      throw new Error(data?.message || "Failed to register individual membership");
    }
  
    return data;
  }
  
  export async function registerOrganizationMembership(payload: OrganizationMembershipRequestBody) {
    const res = await fetch(`${API_BASE}/organization-membership/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    const data = await res.json();
  
    if (!res.ok) {
      throw new Error(data?.message || "Failed to register organization membership");
    }
  
    return data;
  }
  
  