# Push to New Repo (1 contributor only)

Your project is ready: **1 commit**, **123 files**, author **Sumit Awatade** only.

## Step 1: Create a new repo on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** e.g. `Portfolio-Clean` or `Sumit-Portfolio` (or reuse `Portfolio` after deleting the old one)
3. **Public**
4. **Do NOT** check "Add a README" — leave it empty
5. Click **Create repository**

## Step 2: Push from your project folder

In **Git Bash** or **PowerShell**, run (replace `YOUR-NEW-REPO-NAME` with the repo name you chose):

```bash
cd "c:\Portfolio\Sumit_Portfolio"

# Add the new repo as a remote
git remote add newrepo https://github.com/SumitAwatade1718/YOUR-NEW-REPO-NAME.git

# Push the clean history (1 commit) to main
git push -u newrepo fresh-main:main
```

Example if your new repo is named **Portfolio-Clean**:

```bash
git remote add newrepo https://github.com/SumitAwatade1718/Portfolio-Clean.git
git push -u newrepo fresh-main:main
```

After this, the new repo will show **1 contributor: SumitAwatade1718**.

## Optional: Use new repo as your main remote

```bash
git remote remove origin
git remote rename newrepo origin
git branch -M main
```

Then future pushes: `git push origin main`
