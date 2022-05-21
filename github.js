class Github {
    constructor() {
        this.clientID = '9c20e3d22ddab2d31a14'
        this.clientSecret = 'd7e83e1204be15d5777661e72df9c18fbc95457f'
        this.repos_count=5;
        this.repos_sort='created:asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respos_sort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}