react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output h5.ios.jsbundle
react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output h5.android.jsbundle


react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output h5.ios.bundle
react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output h5.android.bundle


code-push release feiniu index.ios.jsbundle 1.0.0 --deploymentName Staging


NGs-MacBook-Pro:feiniu KE$ sudo npm install -g code-push-cli
Password:
    /usr/local/bin/code-push -> /usr/local/lib/node_modules/code-push-cli/script/cli.js
/usr/local/lib
    `-- code-push-cli@1.6.1-beta
  `-- prompt@0.2.14
+-- pkginfo@0.4.0
    `-- winston@0.8.3
      `-- pkginfo@0.3.1

NGs-MacBook-Pro:feiniu KE$ code-push -v
1.6.1-beta
NGs-MacBook-Pro:feiniu KE$ code-push register
A browser is being launched to authenticate your account. Follow the instructions it displays to complete your registration.

    Enter your access token:  eyJhY2Nlc3NLZXlOYW1lIjoiY0t6cWU1aTNLWlkzNktKcFVySFB4YndESHVsb04xUWdJX0oyeCIsInByb3ZpZGVyTmFtZSI6Im1pY3Jvc29mdCIsInByb3ZpZGVyVW5pcXVlSWQiOiI5ZGVkZGZlZjAyYjgzY2YzIn0=

    Successfully logged-in. Your session token was written to /Users/KE/.code-push.config. You can run the code-push logout command at any time to delete this file and terminate your session.

    NGs-MacBook-Pro:feiniu KE$ code-push login
    [Error]  You are already logged in from this machine.
    NGs-MacBook-Pro:feiniu KE$ code-push access-key ls
┌───────────────────────────────────────┬───────────────┬───────────────────────┬─────────────┐
│ Key                                   │ Time Created  │ Created From          │ Description │
├───────────────────────────────────────┼───────────────┼───────────────────────┼─────────────┤
│ cKzqe5i3KZY36KJpUrHPxbwDHuloN1QgI_J2x │ 4 minutes ago │ NGs-MacBook-Pro.local │ Login       │
└───────────────────────────────────────┴───────────────┴───────────────────────┴─────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push app ls
┌──────┬─────────────┐
│ Name │ Deployments │
└──────┴─────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push app add feiniu
Successfully added the "feiniu" app, along with the following default deployments:
    ┌────────────┬───────────────────────────────────────┐
│ Name       │ Deployment Key                        │
├────────────┼───────────────────────────────────────┤
│ Production │ f7X1_Cpn7LboFq8cBZfNGH95KVZNN1QgI_J2x │
├────────────┼───────────────────────────────────────┤
│ Staging    │ 9dvuRAQG-mGKCoP1x3HUPrLxIfWXN1QgI_J2x │
└────────────┴───────────────────────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push app ls
┌────────┬─────────────────────┐
│ Name   │ Deployments         │
├────────┼─────────────────────┤
│ feiniu │ Production, Staging │
└────────┴─────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment ls SwitchCheck
    [Error]  App "SwitchCheck" does not exist.
    NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment add feiniu
Usage: code-push deployment add <appName> <deploymentName>

Examples:
deployment add MyApp MyDeployment  Adds deployment "MyDeployment" to app "MyApp"

NGs-MacBook-Pro:feiniu KE$ code-push deployment add feiniu Myfeiniu
Successfully added the "Myfeiniu" deployment with key "CwjWuPcgrHp1qzq6aHdzFxg4Roi1N1QgI_J2x" to the "feiniu" app.
    NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Myfeiniu   │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment rm app Myfeiniu
Usage: code-push app rm <appName>

Examples:
app rm MyApp  Removes app "MyApp"

NGs-MacBook-Pro:feiniu KE$ code-push deployment rm Myfeiniu
Usage: code-push deployment rm <appName> <deploymentName>

Examples:
deployment rm MyApp MyDeployment  Removes deployment "MyDeployment" from app "MyApp"

NGs-MacBook-Pro:feiniu KE$ code-push deployment rm feiniu Myfeiniu
Are you sure? (Y/n): y
Invalid response: "y"
Deployment removal cancelled.
    NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Myfeiniu   │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment rm feiniu
Usage: code-push deployment rm <appName> <deploymentName>

Examples:
deployment rm MyApp MyDeployment  Removes deployment "MyDeployment" from app "MyApp"

NGs-MacBook-Pro:feiniu KE$ code-push deployment rm feiniu Myfeiniu
Are you sure? (Y/n): y
Invalid response: "y"
Deployment removal cancelled.
    NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Myfeiniu   │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Myfeiniu   │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment rm feiniu Myfeiniu
Are you sure? (Y/n): Y
Successfully removed the "Myfeiniu" deployment from the "feiniu" app.
    NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu
┌────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Update Metadata     │ Install Metrics      │
├────────────┼─────────────────────┼──────────────────────┤
│ Production │ No updates released │ No installs recorded │
├────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ No updates released │ No installs recorded │
└────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$
NGs-MacBook-Pro:feiniu KE$ code-push app ls
┌────────┬─────────────────────┐
│ Name   │ Deployments         │
├────────┼─────────────────────┤
│ feiniu │ Production, Staging │
└────────┴─────────────────────┘
NGs-MacBook-Pro:feiniu KE$ react-native v
Command `v` unrecognized
Usage: react-native <command>

Commands:
- start: starts the webserver
- bundle: builds the javascript bundle for offline use
- unbundle: builds javascript as "unbundle" for offline use
- new-library: generates a native library bridge
- link: Adds a third-party library to your project. Example: react-native link awesome-camera
- android: generates an Android project for your app
- run-android: builds your app and starts it on a connected Android emulator or device
- run-ios: builds your app and starts it on iOS simulator
- upgrade: upgrade your app's template files to the latest version; run this after updating the react-native version in your package.json and running npm install
NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu -k
┌────────────┬───────────────────────────────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Deployment Key                        │ Update Metadata     │ Install Metrics      │
├────────────┼───────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Production │ f7X1_Cpn7LboFq8cBZfNGH95KVZNN1QgI_J2x │ No updates released │ No installs recorded │
├────────────┼───────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ 9dvuRAQG-mGKCoP1x3HUPrLxIfWXN1QgI_J2x │ No updates released │ No installs recorded │
└────────────┴───────────────────────────────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push deployment ls feiniu -k
┌────────────┬───────────────────────────────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Deployment Key                        │ Update Metadata     │ Install Metrics      │
├────────────┼───────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Production │ f7X1_Cpn7LboFq8cBZfNGH95KVZNN1QgI_J2x │ No updates released │ No installs recorded │
├────────────┼───────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ 9dvuRAQG-mGKCoP1x3HUPrLxIfWXN1QgI_J2x │ No updates released │ No installs recorded │
└────────────┴───────────────────────────────────────┴─────────────────────┴──────────────────────┘
NGs-MacBook-Pro:feiniu KE$ code-push release feiniu codepush.js 1.0.0
    [Error]  ENOENT: no such file or directory, lstat 'codepush.js'
NGs-MacBook-Pro:feiniu KE$ code-push release feiniu index.ios.jsbundle 1.0.0 --deploymentName Staging
Upload progress:[==================================================] 100% 0.0s
Successfully released an update containing the "index.ios.jsbundle" file to the "Staging" deployment of the "feiniu" app.
    NGs-MacBook-Pro:feiniu KE$



react-native bundle --parameter ios --entry-file index.ios.js --bundle-output ./bundles/SwitchCheck010000.js --assets-dest ./bundles


code-push release feiniu ./ios/index.ios.jsbundle 1.0.0 [-deploymentName 部署名字] [-desc] [-mandatory]

code-push release feiniu ./ios/assets/index.ios.jsbundle 1.0.0 [--deploymentName Staging [--description "好难"] [--mandatory]



<View role="toolbar" style={{flex: 1}}>
<View style={headerStyles.header}>
<TouchableOpacity>
<Image source={require('./app/images/icon_back.png')} style={{width:30,height:30}}/>
</TouchableOpacity>
<Text style={headerStyles.headerText}>2222222222</Text>
</View>
</View>
<View style={headerStyles.actsm}>
<Text style={headerStyles.text}>{this.state.activityInfo.title}</Text>
</View>
<View style={headerStyles.descbox}>
    <Text style={headerStyles.descText}>{this.state.activityInfo.desc}</Text>
    <Text style={headerStyles.descText}>活动时间：{this.state.activityInfo.startTime} — {this.state.activityInfo.endTime}</Text>
</View>

<View style={styles.flexContainer}>
    <View style={styles.cell}>
        <Button style={this.state.tab == SORT.ZONGHE_SORT.sortName ? styles.selectColor : ""}
                title={SORT.ZONGHE_SORT.name}
                onPress={() => {
                                    this.changeSelected(SORT.ZONGHE_SORT.sortName)
                                }}
                text={SORT.ZONGHE_SORT.name}
        />
        </View>
        <View style={styles.cell}>
        <Button style={this.state.tab == SORT.JIAGE_SORT.sortName ? styles.selectColor : ""}
        title={SORT.JIAGE_SORT.name}
        onPress={() => {
        this.changeSelected(SORT.JIAGE_SORT.sortName)
        }}
        text={SORT.JIAGE_SORT.name}
        />
        </View>
        <View style={styles.cell}>
        <Button style={this.state.tab == SORT.XIAOLIANG_SORT.sortName ? styles.selectColor : ""}
        title={SORT.XIAOLIANG_SORT.name}
        onPress={() => {
        this.changeSelected(SORT.XIAOLIANG_SORT.sortName)
        }}
        text={SORT.XIAOLIANG_SORT.name}
        />
        </View>
        <View style={styles.cell}>
        <Button style={this.state.tab == SORT.SAIXUAN_SORT.sortName ? styles.selectColor : ""}
        title={SORT.SAIXUAN_SORT.name}
        onPress={() => {
        this.changeSelected(SORT.SAIXUAN_SORT.sortName)
        }}
        text={SORT.SAIXUAN_SORT.name}
        />
        </View>
        </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderScoreboard}
        renderFooter = {this.renderFooter}
        onEndReachedThreshold={100}
        refreshControl={
        <RefreshControl
            tintColor="#ccc"
            title="释放更新..."
            colors={['#ccc', '#ccc', '#ccc']}
            progressBackgroundColor="#ccc"
        />
        }
        onEndReached={this.nextPage}
        style={styles.listView}/>



        #ifdef DEBUG
        jsCodeLocation = [NSURL URLWithString:@"http://10.200.242.171:8081/index.ios.bundle?platform=ios&dev=false"];
        #else
        jsCodeLocation = [CodePush bundleURL];
        #endif