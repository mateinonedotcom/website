(function (window) {
    const toUrl = (suffix) =>
        `/assets/puzzles/checkmate-lichess-2013-01-${suffix}.jsonl`;

    const suffixes = [
        "aaa", "aab", "aac", "aad", "aae", "aaf", "aag", "aah", "aai", "aaj", "aak", "aal", "aam", "aan", "aao", "aap", "aaq", "aar", "aas", "aat", "aau", "aav", "aaw", "aax", "aay", "aaz",
        "aba", "abb", "abc", "abd", "abe", "abf", "abg", "abh", "abi", "abj", "abk", "abl", "abm", "abn", "abo", "abp", "abq", "abr", "abs", "abt", "abu", "abv", "abw", "abx", "aby", "abz",
        "aca", "acb", "acc", "acd", "ace", "acf", "acg", "ach", "aci", "acj", "ack", "acl", "acm", "acn", "aco", "acp", "acq", "acr", "acs", "act", "acu", "acv", "acw", "acx", "acy", "acz",
        "ada", "adb", "adc", "add", "ade", "adf", "adg", "adh", "adi", "adj", "adk", "adl", "adm", "adn", "ado", "adp", "adq", "adr", "ads", "adt", "adu", "adv", "adw", "adx", "ady", "adz",
        "aea", "aeb", "aec", "aed", "aee", "aef", "aeg", "aeh", "aei", "aej", "aek", "ael", "aem", "aen", "aeo", "aep", "aeq", "aer", "aes", "aet", "aeu", "aev", "aew", "aex", "aey", "aez",
        "afa", "afb", "afc", "afd", "afe", "aff", "afg", "afh", "afi", "afj", "afk", "afl", "afm", "afn", "afo", "afp", "afq", "afr", "afs", "aft", "afu", "afv", "afw", "afx", "afy", "afz",
        "aga", "agb", "agc", "agd", "age", "agf", "agg", "agh", "agi", "agj", "agk", "agl", "agm", "agn", "ago", "agp", "agq", "agr", "ags", "agt", "agu", "agv", "agw", "agx", "agy", "agz",
        "aha", "ahb", "ahc"
    ];

    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const promisePuzzles = fetch(toUrl(suffix))
        .then(response => response.text())
        .then(data =>
            data.split("\n")
                .filter(line => line.trim() !== "")
                .map(line => JSON.parse(line))
        )

    window.mateinone = window.mateinone || {};
    window.mateinone.puzzle = window.mateinone.puzzle || {};
    window.mateinone.puzzle.Client = {
        getOneRandomly: () => promisePuzzles.then(puzzles => puzzles[Math.floor(Math.random() * puzzles.length)]),
    }
})(this);
