import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { REVIEWS } from '@/lib/dashboard-data';
import Link from 'next/link';

const ReviewList = () => {
  return (
    <Card className="border-none shadow-sm bg-white h-full">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b border-gray-50">
        <CardTitle className="text-sm font-bold text-[#0b4d6b]">Latest Review</CardTitle>
        <Link href="#" className="text-[10px] text-[#1680ab] font-bold uppercase tracking-widest hover:underline">
          See all
        </Link>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-50">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-9 h-9 ring-2 ring-white shadow-sm">
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback className="bg-[#f1f5f9] text-[#1680ab] text-xs font-bold">
                    {review.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{review.author}</h4>
                  <p className="text-[10px] font-medium text-gray-400">{review.date}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewList;
