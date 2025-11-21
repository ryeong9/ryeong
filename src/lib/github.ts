import { REST_URL, USER_TOKEN } from '@/constants/env';
import { AllRepoType, UserType } from '@/types';

export async function getUserAllRepo(): Promise<AllRepoType> {
  const params = new URLSearchParams({
    visibility: 'public',
    affiliation: 'owner',
    per_page: '4',
    sort: 'updated',
  });

  const res = await fetch(`${REST_URL}/user/repos?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
      accept: 'application/vnd.github+json',
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('❌ Fetch error:', res.status, errorText);
    throw new Error('Failed to fetch user repository');
  }

  return res.json();
}

export async function getUserInfo(): Promise<UserType> {
  const res = await fetch(`${REST_URL}/user`, {
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
      accept: 'application/vnd.github+json',
    },
  });

  if (!res.ok) {
    console.error('❌ Fetch error:', res.statusText);
    throw new Error('Failed to fetch user information');
  }

  return res.json();
}
