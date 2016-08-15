/**
 * Created by Vasili Kisel on 5/4/2016.
 */

export default function run($rootScope, $state, AuthService) {

    $rootScope.$on('$stateChangeStart', function (event, toState) {
        console.log('state status: '+AuthService.isAuthenticated());
        $rootScope.stateStatus=AuthService.isAuthenticated();
        console.log('run');
        if (!AuthService.isAuthenticated()) {
            if (!toState.data.noLogin) {
                event.preventDefault();
                $state.go('login');
            }
        }
    })
}

