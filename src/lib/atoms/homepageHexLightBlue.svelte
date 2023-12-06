<section class="light-blue" />

<section class="h3-light-blue">
	<a href="/kennisclips">
		<h3>
			<em>Kennisclips</em>
		</h3>
	</a>
	<img src="assets\arrows.svg" alt="" />
</section>

<style>
	.h3-light-blue:hover h3 {
		/* color: var(--vtSec-Green); */
		text-transform: uppercase;
	}

	.light-blue {
		background: var(--vtLightBlue);

		width: 300px;
		height: 275px;
		clip-path: polygon(
			25% 0%,
			75% 0%,
			100% 50%,
			75% 100%,
			25% 100%,
			0% 50%
		);
		transform: rotate(90deg);
	}

	.h3-light-blue {
		color: var(--vtWhite);

		z-index: 1;
		display: grid;
		text-align: center;
		justify-items: center;
		align-content: center;
	}

	.light-blue,
	.h3-light-blue {
		grid-column-start: 3;
		grid-column-end: 5;
		grid-row-start: 3;

		margin-top: -10%;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		color: var(--vtWhite);
	}

	em {
		font-family: var(--vtPrimaryFont);
		font-style: normal;

		font-size: 1rem;
	}

	/* tablet */
	@media (min-width: 31em) and (max-width: 55em) {
		.light-blue,
		.h3-light-blue {
			grid-column-start: 1;
			grid-column-end: 3;
			grid-row-start: 4;

			margin-top: -20%;
		}
	}

	/* mobile */
	@media (max-width: 31em) {
		.light-blue,
		.h3-light-blue {
			grid-column-start: 2;
			grid-column-end: 4;
			grid-row-start: 6;

			margin-left: -25%;
		}
	}
</style>
