// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
    //   variable to hold pop as it grows
    let currentP = p0;
    //     count the iterations
    let years = 0;
    // convert percentage to useable decimal
    const percentage = percent / 100;

    //     loop through until currentP = p
    while (currentP < p) {
        currentP = currentP + currentP * percentage + aug;
        years++;
        console.log(`years: ${years} + pop: ${currentP}`);
    }

    // return years depending on how close it comes to the target population
    if (currentP !== p) {
        // this was needed for the call: 1000, 2, 50 1214
        return Math.ceil(years);
    } else if (currentP > p) {
        return years;
    }
}

// BUT NOT ABLE TO GET AROUND 101st TEST, WHERE GOT undefined instead of 50
// so found this solution using recursion

function nbYear(p0, percent, aug, p, years = 0) {
    return p0 >= p
        ? years
        : nbYear(
              Math.floor(p0 + p0 * (percent / 100)) + aug,
              percent,
              aug,
              p,
              years + 1
          );
}