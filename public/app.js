	var IndexOfSlide = 0;

	function buttons(m){
        IndexOfSlide = IndexOfSlide + m;
	    SlideShow(IndexOfSlide);
	}

	SlideShow(IndexOfSlide);

	function SlideShow(number)
	{
		var slides = document.getElementsByClassName("images");

		if (number == slides.length)
		{
			IndexOfSlide = 0;
			number = 0;
		}

		if(number < 0){
			IndexOfSlide = slides.length - 1;
			number = slides.length - 1;
		}

		for(var x of slides){
			x.style.display = "none";
		}

		slides[number].style.display = "block"
	}


