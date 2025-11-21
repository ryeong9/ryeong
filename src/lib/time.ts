export function githubTimeAgo(dateString: string) {
  const now = new Date();
  const past = new Date(dateString);

  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) {
    return 'just now';
  }

  if (diffMin < 60) {
    return `${diffMin} minutes ago`;
  }

  if (diffHour < 24) {
    return `${diffHour} hours ago`;
  }

  if (diffDay < 30) {
    return `${diffDay} days ago`;
  }

  // 30일 이상
  return `on ${past.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })}`;
}
