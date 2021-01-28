async function logPWAInstallToAnalytics() {
    if ('getInstalledRelatedApps' in navigator) {
        const installedApps = await navigator.getInstalledRelatedApps();
        installedApps.forEach(app => window.firebase.analytics().logEvent(
            "pwa_installed", {
            id: app.id,
            url: app.url
        }
        ))
    }



}

export default logPWAInstallToAnalytics;