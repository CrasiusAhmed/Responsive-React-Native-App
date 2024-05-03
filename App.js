import { StyleSheet, 
  Text, 
  View, 
  Platform, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Image } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';

export default function App() {
  const top1 = useSharedValue(0)
  const top2 = useSharedValue(0)
  const topcircle1 = useSharedValue(0)
  const topcircle2 = useSharedValue(0)
  const top4 = useSharedValue(49 + "%")
  const top5 = useSharedValue(55 + "%")
  const repeat = useSharedValue(0)


  top1.value = withRepeat(
    withTiming(38, { duration: 1200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    0,
    true
  )
  top2.value = withRepeat(
    withTiming(-38, { duration: 1200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    0,
    true
  )
  topcircle1.value = withRepeat(
    withTiming(-30, { duration: 2000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    0,
    true
  )
  topcircle2.value = withRepeat(
    withTiming(-30, { duration: 2500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    0,
    true
  )
  

  top4.value = withRepeat(
    withTiming(62 + "%", { duration: 1500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    49 + "%",
    true
  )
  top5.value = withRepeat(
    withTiming(62 + "%", { duration: 1500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
    55 + "%",
    true
  )
  repeat.value = withRepeat(
    withTiming(-360, { duration: 2500, easing: Easing.ease }),
    0,
    true
  )


  const omim1 = useAnimatedStyle(() => ({ top: top1.value, zIndex: '2'}), []);
  const omim2 = useAnimatedStyle(() => ({ top: top2.value, zIndex: '-2'}), []);
  const omimCircle1 = useAnimatedStyle(() => ({ top: topcircle1.value,}), []);
  const omimCircle2 = useAnimatedStyle(() => ({ top: topcircle2.value,}), []);
  const omim4 = useAnimatedStyle(() => ({ top: top4.value, zIndex: '3'}), []);
  const omim5 = useAnimatedStyle(() => ({ top: top5.value, zIndex: '2'}), []);
  const repeat1 = useAnimatedStyle(() => ({ rotate: repeat.value + 'deg', width: '100%', height: '100%'}), []);




  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={{ paddingLeft: '4%' }}>
          <Text style={[styles.logo, styles.h1]}>Logo</Text>
        </View>
        <View style={{ width: '100%', height: '50vh' }}>
          <Animated.View style={omim1}>
            <View style={[styles.card2, styles.card1]}></View>
          </Animated.View>
          <View style={styles.card2}></View>
          <Animated.View style={omim2}>
            <View style={[styles.card2, styles.card3]}></View>
          </Animated.View>

          <Animated.View style={omimCircle1}>
            <View style={[styles.circle2, styles.circle1]}></View>
          </Animated.View>
          <Animated.View style={omimCircle2}>
            <View style={styles.circle2}></View>
          </Animated.View>
          <Animated.View style={omimCircle2}>
            <View style={[styles.circle2, styles.circle3]}></View>
          </Animated.View>

          <View style={{ top: '50%' }}>
            <Image style={styles.wid} source={require('./assets/Robot.png')} />
          </View>
          
          <View style={{ top: '120%', paddingLeft: '4%' }}>
            <Text style={styles.h1}>Digital Services With Excellent Quality</Text>
            <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos aspernatur exercitationem, necessitatibus nemo repudiandae.</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* Four Box Detail */}

        <View style={{ top: '22%'}}>
          <View style={{ paddingLeft: '4%' }}>
            <Text style={styles.h1}>What We Offer</Text>
            <Text style={styles.p}>We Are UX Creative and Professinoal Desginer And Make Sure We Good Price As Our Client Want it</Text>
          </View>


          <View style={{ gap: '50px' }}>
            <View style={styles.flexSpace}>
              <View style={styles.boxColor}>
                <View style={styles.iconSkew}></View>
                <Text style={[styles.p, styles.center]}>Digital Marketing</Text>
              </View>

              <View style={styles.boxColor}>
                <View style={styles.iconSkew}></View>
                <Text style={[styles.p, styles.center]}>UX Design</Text>
              </View>
            </View>

            <View style={styles.flexSpace}>
              <View style={styles.boxColor}>
                <View style={styles.iconSkew}></View>
                <Text style={[styles.p, styles.center]}>UI Design</Text>
              </View>

              <View style={styles.boxColor}>
                <View style={styles.iconSkew}></View>
                <Text style={[styles.p, styles.center]}>Python App</Text>
              </View>
            </View>
          </View>


          <View style={{ top: '10%', paddingLeft: '4%' }}>
              <Text style={[styles.h1, styles.center, styles.h3]}>Click On Box To Show Project</Text>
          </View>
        </View>

        {/* About Page */}

        <View style={{ top: '35%' }}>
          <View style={styles.square1}>
            <View style={styles.flexSpace}>
              <View style={styles.CircleRound}>
                <Animated.View style={repeat1}>
                  <View style={styles.lineRound1}></View>
                  <View style={styles.lineRound2}></View>
                </Animated.View>

                <View style={{ top: '55%' }}>
                  <Text style={[styles.p, styles.center]}>Founder: Imora</Text>
                </View>
              </View>


              <View style={styles.CircleRound}>
                <Animated.View style={repeat1}>
                  <View style={styles.lineRound1}></View>
                  <View style={styles.lineRound2}></View>
                </Animated.View>

                <View style={{ top: '55%' }}>
                  <Text style={[styles.p, styles.center]}>President: Crasius</Text>
                </View>
              </View>

              <View style={styles.CircleRound}>
                <Animated.View style={repeat1}>
                  <View style={styles.lineRound1}></View>
                  <View style={styles.lineRound2}></View>
                </Animated.View>


                <View style={{ top: '55%' }}>
                  <Text style={[styles.p, styles.center]}>Designer: Ahmed</Text>
                </View>
              </View>

            </View>
          </View>

          <View style={{ width: '400px', paddingLeft: '4%' }}>
              <Text style={[styles.h1]}>Why We?</Text>
              <Text style={[styles.p]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia modi blanditiis aliquid nemo voluptatibus perferendis ab distinctio, esse dicta?</Text>
          </View>

          <View style={styles.square2}>
            <View style={styles.flexSpace}>
              <View>
                <Text style={[styles.h1, styles.center]}>10</Text>
                <Text style={[styles.p, styles.center2]}>Mask</Text>
              </View>

              <View>
                <Text style={[styles.h1, styles.center]}>4</Text>
                <Text style={[styles.p, styles.center2]}>Project</Text>
              </View>
              
            </View>
    
            <View style={styles.lineRound3}></View>
            <View style={styles.lineRound4}></View>

            <View style={styles.flexSpace}>

              <View>
                <Text style={[styles.h1, styles.center]}>5</Text>
                <Text style={[styles.p, styles.center2]}>Professional</Text>
              </View>

              <View>
                <Text style={[styles.h1, styles.center]}>8</Text>
                <Text style={[styles.p, styles.center2]}>Templates</Text>
              </View>
            </View>


          </View>
          
        </View>


        {/* Contact Page */}

        <View style={{ top: '45%' }}>
          
          <View style={{ width: '500px', paddingLeft: '4%' }}>
              <Text style={[styles.h1]}>How Can We Help You?</Text>
              <Text style={[styles.p]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius officia libero asperiores nisi commodi numquam est laboriosam cum corrupti.</Text>
          </View>


          <View style={styles.poball}>
            <View style={styles.ball}>
              <View style={styles.ballIn}>
                <Text style={[styles.p, styles.center]}>Sign Up</Text>

                <View style={styles.circlebtn}></View>
                <View style={styles.linebtn}></View>
              </View>
            </View>

            <View style={styles.lineCenter}></View>

            <View style={styles.ball2}>
              <View style={styles.ballIn}>
                <Text style={[styles.p, styles.center]}>Sign Up</Text>

                <View style={styles.circlebtn}></View>
                <View style={styles.linebtn}></View>
              </View>
            </View>
          </View>


          <View style={styles.logoShow}>
            <Animated.View style={omim4}>
              <View style={styles.cardSkew1}></View>
            </Animated.View>

            <Animated.View style={omim5}>
              <View style={styles.cardSkew2}></View>
            </Animated.View>
            <View style={styles.cardSkew3}></View>

            <Animated.View style={omim4}>
              <View style={styles.logoSkew}>
                <Text style={[styles.h1, styles.center]}>Logo</Text>
              </View>
            </Animated.View>
          </View>
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
