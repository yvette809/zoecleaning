"use client";

import { useState, useEffect } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0); // Rating from 1 to 5
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage when component mounts
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  // Save reviews to localStorage
  const saveReviewsToLocalStorage = (updatedReviews) => {
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      setStatus("Please provide both a rating and a comment.");
      return;
    }

    const newReview = { rating, comment };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    saveReviewsToLocalStorage(updatedReviews);

    setStatus("Thank you for your review!");
    setRating(0);
    setComment("");
  };

  return (
    <div className="review-form">
      <h2 className="text-xl font-bold">Leave a Review</h2>
      {status && <p className="status-message">{status}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          >
            <option value={0}>Select a rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your review here..."
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>

      {/* Display the list of reviews */}
      <div className="reviews mt-6">
        <h3 className="text-lg font-semibold">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Rating:</span>
                  <span>{review.rating} stars</span>
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
