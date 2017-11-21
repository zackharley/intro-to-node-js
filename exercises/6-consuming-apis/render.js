module.exports = function render(user) {
    return (
        `
			<!DOCTYPE html>
			<html>
				<head>
					<title>GitHub Profile for ${user.username}</title>
					<style>
						@import "https://fonts.googleapis.com/css?family=Roboto:300,400,600";
						body {
						  margin: 0;
						  font-family: 'Roboto', sans-serif;
						}
						
						.gh-wrapper {
						  align-items: center;
						  background-color: #f5f5f5;
						  color: #333;
						  display: flex;
						  flex-direction: column;
						  height: 100vh;
						  justify-content: center;
						  width: 100vw;
						}
						
						.gh-title {
						  margin-top: -200px;
						}
						
						.gh-card {
						  background-color: white;
						  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);
						  height: 400px;
						  width: 600px;
						}
						
						.gh-inner-wrapper {
						  display: flex;
						  flex-direction: row;
						  height: calc(100% - 60px);
						  padding: 30px;
						  width: calc(100% - 60px);
						}
						
						.gh-col:first-of-type {
						  border-right: 1px solid #CCC;
						  padding-right: 20px;
						}
						
						.gh-col:nth-of-type(2) {
						  padding-left: 20px;
						}
						
						.gh-avatar {
						  border-radius: 4px;
						  height: 200px;
						}
						
						.gh-name-wrapper {
						  display: flex;
						  flex-direction: row;
						}
						
						.gh-github {
						  font-size: 20px;
						  margin: 18px 10px 0px 0px;
						}
						
						.gh-name {
						  color: #333;
						  font-size: 20px;
						  font-weight: 600;
						  margin: 16px 0px 6px 0px;
						}
						
						.gh-username {
						  font-size: 20px;
						  font-weight: 300;
						  margin: 0px;
						}
						
						.gh-username-link {
						  color: #666;
						  text-decoration: none;
						}
						
						.gh-username-link:hover {
						  text-decoration: underline;
						}
						
						.gh-key {
						  margin: 0px 0px 4px 0px;
						}
						
						.gh-value {
						  margin: 0px 0px 10px 0px;
						}
						</style>
					<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
				</head>
				<body>
					<main class="gh-wrapper">
						<h1 class="gh-title">GitHub Grabber</h1>
						<article class="gh-card">
							<section class="gh-inner-wrapper">
								<section class="gh-col">
									<img class="gh-avatar" src="${user.avatarUrl}" />
									<section class="gh-name-wrapper">
										<i class="gh-github fa fa-github" aria-hidden="true"></i>
										<h2 class="gh-name">${user.name}</h2>
									</section>
								<h2 class="gh-username"><a class="gh-username-link" href="${user.profileUrl}">${user.username}</a></h2>
								</section>
								<section class="gh-col">
									${
            user.bio !== null ?
                `
									<h3 class="gh-key">Bio</h3>
									<p class="gh-value">${user.bio}</p>
										` :
                ''
            }
									${
            user.location !== null ?
                `
									<h3 class="gh-key">Location</h3>
									<p class="gh-value">${user.location}</p>
										` :
                ''
            }
									<h3 class="gh-key">Repositories</h3>
									<p class="gh-value">${user.repos}</p>
									<h3 class="gh-key">Followers</h3>
									<p class="gh-value">${user.followers}</p>
									<h3 class="gh-key">Following</h3>
									<p class="gh-value">${user.following}</p>
								</section>
							</section>
						</article>
					</main>
				</body>
			</html>
		`
    );
}
