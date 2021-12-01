const testimonials = [
  {
    feedback: " I’ve been interested in coding for a while but never taken the jump, until now.  I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    image: 'images/image-tanya.jpg'
  },
  {
    feedback: " If you want to lay the best foundation possible I’d recommend taking this course.  The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    image: 'images/image-john.jpg'
  }
];
let index = 0;

function updateTestimonials(_index) {
  if (_index > testimonials.length - 1) {
    _index = index = 0;
  }
  if (_index < 0) {
    _index = index = testimonials.length - 1;
  }

  const testimonial = testimonials[index];

  $('.feedback>p').html(testimonial.feedback);
  $('.profile__name').html(testimonial.name);
  $('.profile__job').html(testimonial.job);
  $('.image-container>img').attr('src', testimonial.image);
}

$('#prev-btn').click(function() {
  index -= 1;
  updateTestimonials(index);
});

$('#next-btn').click(function() {
  index += 1;
  updateTestimonials(index);
});

updateTestimonials(index);
