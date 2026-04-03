'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PostAvailabilityModal from '@/components/dashboard/shared/post-availability-modal';

/**
 * Client component wrapper for the "Post Availability" button.
 * Controls the state of the PostAvailabilityModal.
 */
const PostAvailabilityButton: React.FC<{ className?: string; label?: string }> = ({
  className,
  label = 'Post Availability',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className={className}>
        {label}
      </Button>
      <PostAvailabilityModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default PostAvailabilityButton;
