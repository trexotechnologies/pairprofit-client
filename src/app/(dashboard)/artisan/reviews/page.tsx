import React from 'react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ArrowLeft, ChevronDown } from 'lucide-react';
import { REVIEWS } from '@/lib/dashboard-data';

const ALL_REVIEWS = [
  {
    id: '1',
    author: 'Claire M.',
    avatar: '/avatar1.png',
    date: 'Oct, 2025',
    rating: 5,
    comment: 'Excellent work, fixed our piping for the summer.',
    job: 'Plumber - heating and repair',
  },
  {
    id: '2',
    author: 'Jason Williams',
    avatar: '/avatar2.png',
    date: '1 month ago',
    rating: 5,
    comment: 'PairProfit connected me with a reliable plumber the same day. Truly professional and easy to work with.',
    job: 'Plumber - heating and repair',
  },
  {
    id: '3',
    author: 'Joe Blue',
    avatar: '/avatar3.png',
    date: '2 months ago',
    rating: 5,
    comment: 'PairProfit connected me with a reliable plumber the same day. Truly professional and easy to work with.',
    job: 'Electrician - house wiring',
  },
];

const RATING_BREAKDOWN = [
  { label: '5 stars', count: 10, percent: 80 },
  { label: '4 stars', count: 2, percent: 15 },
  { label: '3 stars', count: 0, percent: 0 },
  { label: '2 stars', count: 0, percent: 0 },
  { label: '1 star', count: 0, percent: 0 },
];

const CATEGORY_RATINGS = [
  { label: 'Seller communication level', score: 5 },
  { label: 'Quality of delivery', score: 5 },
  { label: 'Value of delivery', score: 3 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = 4.9;
  const totalReviews = 120;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8 bg-gray-50/30 min-h-screen">
      {/* Page Header */}
      <header className="space-y-4">
        <Link
          href="/artisan"
          className="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reviews</h1>
          <p className="text-gray-500 text-sm">
            See what clients are saying about your work.
          </p>
        </div>
      </header>

      {/* Rating Overview Card */}
      <Card className="border border-gray-100 shadow-sm rounded-xl overflow-hidden bg-white">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left: Big Score */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center space-y-1">
              <span className="text-5xl font-bold text-amber-400">
                {avgRating}
              </span>
              <p className="text-sm font-semibold text-gray-900">Average Rating</p>
              <p className="text-xs text-gray-400">{totalReviews} Reviews</p>
            </div>

            {/* Middle: Bar breakdown */}
            <div className="md:col-span-5 space-y-2.5">
              {RATING_BREAKDOWN.map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-12 shrink-0">
                    {row.label}
                  </span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gray-800"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-6">
                    ({row.count})
                  </span>
                </div>
              ))}
            </div>

       {/* Right: Category Ratings */}
            <div className="md:col-span-4 space-y-3">
              <h3 className="text-sm font-bold text-gray-900 mb-4">Rating breakdown</h3>
              {CATEGORY_RATINGS.map((cat) => (
                <div key={cat.label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{cat.label}</span>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-gray-900">{cat.score}</span>
                  </div>
                </div>
              ))}
            </div>     
          </div>
        </CardContent>
      </Card>

      {/* Reviews List Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">All Reviews</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Most recent
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              All jobs
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {ALL_REVIEWS.map((review) => (
            <Card key={review.id} className="border border-gray-100 shadow-sm rounded-xl overflow-hidden bg-white hover:border-gray-200 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border border-gray-100">
                    <AvatarImage src={review.avatar} alt={review.author} />
                    <AvatarFallback className="bg-gray-50 text-gray-400">
                      {review.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {review.author}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {review.date}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-sm font-bold text-gray-900">{review.rating}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.comment}
                </p>

                <p className="text-xs text-gray-400 font-medium">
                  Job: {review.job}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

